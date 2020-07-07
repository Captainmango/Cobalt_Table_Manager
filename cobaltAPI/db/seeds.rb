# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


admin = Role.create(role_title: "admin")
owner = Role.create(role_title: "owner")
server = Role.create(role_title: "server")
diner = Role.create(role_title: "diner")
    admin.save
    owner.save
    server.save
    diner.save



5.times do 
    admin = Role.find(1)
    user = admin.users.create(first_name: Faker::Name.first_name,
                last_name: Faker::Name.last_name,
                username: Faker::Internet.username,
                password: "123456",
                mobile_number: "+447931555501",
                email_address: Faker::Internet.email
                )
    user.save
end

nu_loc = Location.create(name: Faker::Company.name, location_password: "123456")
nu_loc.save

table = nu_loc.tables.create(capacity: 6)
table.save


user = User.find(1)
booking = table.bookings.create(datetime: "2020-07-07 16:00:00", number_of_diners: 5)
byebug
booking.save







