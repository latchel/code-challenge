class CreateWeeks < ActiveRecord::Migration[5.0]
  def change
    create_table :weeks do |t|
      t.integer :author_id
      t.integer :weekstart
      t.integer :additions
      t.integer :deletions
      t.integer :commits

      t.timestamps
    end
  end
end
