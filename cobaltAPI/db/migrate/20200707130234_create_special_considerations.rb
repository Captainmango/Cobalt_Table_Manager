class CreateSpecialConsiderations < ActiveRecord::Migration[5.2]
  def change
    create_table :special_considerations do |t|

      t.timestamps
    end
  end
end
