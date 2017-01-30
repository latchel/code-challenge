class CreateContributors < ActiveRecord::Migration[5.0]
  def change
    create_table :contributors do |t|
      t.string :login
      t.integer :github_id
      t.string :avatar_url
      t.string :url

      t.timestamps
    end
  end
end
