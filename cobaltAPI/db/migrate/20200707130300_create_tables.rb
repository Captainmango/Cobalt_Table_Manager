class CreateTables < ActiveRecord::Migration[5.2]
  def change
    create_table :tables do |t|
      t.belongs_to :location
      t.integer :capacity

      t.timestamps
    end
  end
end
