# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_07_130300) do

  create_table "bookings", force: :cascade do |t|
    t.integer "location_id"
    t.integer "users_id"
    t.integer "table_id"
    t.string "datetime"
    t.integer "number_of_diners"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_bookings_on_location_id"
    t.index ["table_id"], name: "index_bookings_on_table_id"
    t.index ["users_id"], name: "index_bookings_on_users_id"
  end

  create_table "locations", force: :cascade do |t|
    t.integer "user_id"
    t.string "name"
    t.string "location_password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_locations_on_user_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "role_title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "special_considerations", force: :cascade do |t|
    t.string "consideration_title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tables", force: :cascade do |t|
    t.integer "location_id"
    t.integer "capacity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_tables_on_location_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.string "mobile_number"
    t.string "email_address"
    t.integer "role_id"
    t.integer "location_id"
    t.integer "booking_id"
    t.integer "table_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["booking_id"], name: "index_users_on_booking_id"
    t.index ["location_id"], name: "index_users_on_location_id"
    t.index ["role_id"], name: "index_users_on_role_id"
    t.index ["table_id"], name: "index_users_on_table_id"
  end

end
