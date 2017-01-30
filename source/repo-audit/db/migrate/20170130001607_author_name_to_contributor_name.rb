class AuthorNameToContributorName < ActiveRecord::Migration[5.0]
  def change
    rename_column :weeks, :author_id, :contributor_id
  end
end
