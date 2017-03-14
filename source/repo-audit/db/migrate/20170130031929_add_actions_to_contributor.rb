class AddActionsToContributor < ActiveRecord::Migration[5.0]
  def change
    add_column :contributors, :month_additions, :integer
    add_column :contributors, :month_deletions, :integer
    add_column :contributors, :month_commits, :integer
  end
end
