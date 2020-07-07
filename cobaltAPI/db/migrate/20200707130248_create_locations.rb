class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.belongs_to :user
      t.string :name
      t.string :location_paswword

      t.timestamps
    end
  end
end
