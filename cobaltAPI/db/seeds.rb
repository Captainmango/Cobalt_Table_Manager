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

user = User.find(1)





