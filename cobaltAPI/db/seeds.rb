# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

table_sizes = [2,4,6,8,10]

admin = Role.create(role_title: "admin")
owner = Role.create(role_title: "owner")
server = Role.create(role_title: "server")
diner = Role.create(role_title: "diner")
    admin.save
    owner.save
    server.save
    diner.save

admin = Role.find(1)
user = admin.users.create(first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    username: Faker::Internet.username,
    password: "123456",
    mobile_number: "+447931555501",
    email_address: Faker::Internet.email
    )
user.save

# priveliges are the following: admin = 1, owner = 2, server = 3, diner = 4

5.times do 
    admin = Role.find(2)
    user = admin.users.create(first_name: Faker::Name.first_name,
                last_name: Faker::Name.last_name,
                username: Faker::Internet.username,
                password: "123456",
                mobile_number: "+447931555501",
                email_address: Faker::Internet.email
                )
    user.save
end

8.times do
    nu_loc = Location.create(name: Faker::Company.name, location_password: "123456")
    nu_loc.users << User.find(rand(2..6))
    nu_loc.save
end

Location.all.each do |location|
    5.times do
        table = location.tables.create(capacity: 10)
        table.save
    end
end


user = User.find(1)
location = Location.find(1)
table = location.tables[0]
10.times do
    booking = user.bookings.create(location: location, table: table, datetime: rand(30.days).seconds.from_now, number_of_diners: 5, notes: Faker::Lorem.sentence)
    booking.save
end







