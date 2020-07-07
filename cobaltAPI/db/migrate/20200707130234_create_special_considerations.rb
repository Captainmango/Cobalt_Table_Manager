class CreateSpecialConsiderations < ActiveRecord::Migration[5.2]
  def change
    create_table :special_considerations do |t|
      t.string :consideration_title

      t.timestamps
    end
  end
end
