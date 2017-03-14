class Contributor < ApplicationRecord
  has_many :weeks

  def set_month_actions
    a = 0
    d = 0
    c = 0
    self.weeks[-4..-1].each do |x|
      a += x.additions
      d += x.deletions
      c += x.commits
    end

    self.update(month_additions: a, month_deletions: d, month_commits: c)
    self.save!
  end
end
