class ContributorsController < ApplicationController
  def index
    get_contributors
    @contributors = Contributor.all
    render json: @contributors
  end

  private

  def get_contributors
    data = stats_from_github
    data.each do |x|
      c = Contributor.create_with(
        login:      x['author']['login'], 
        avatar_url: x['author']['avatar_url'], 
        url:        x['author']['url']
      ).find_or_create_by(github_id: x['author']['id'])

      c.set_month_actions
    end
  end

  def stats_from_github
    HTTParty.get('https://api.github.com/repos/nodejs/node/stats/contributors')
  end
end