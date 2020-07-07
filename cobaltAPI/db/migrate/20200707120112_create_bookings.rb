class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.belongs_to :location
      t.belongs_to :users
      t.belongs_to :table
      t.string :datetime
      t.integer :number_of_diners
      t.string :notes

      t.timestamps
    end
  end
end
