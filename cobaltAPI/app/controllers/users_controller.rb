class UsersController < ApplicationController

    before_action :authorized, only: [:auto_login]

    # Create new user
    def create
        role = Role.find_by(role_title: user_params[:role])
        @user = role.users.create(user_params.except(:role))
        if @user.valid?
            token = encode_token({user_id: @user.id})
            render json: UsersSerializer.new(@user, {params: {token: token}}).serialized_json
        else
            # error here should be more meaningful and be either a 400 code
            render json: {error: "Invalid username or password"}
        end
    end

    # Logging in

    def login
        @user = User.find_by(username: params[:username])

        if @user && @user.authenticate(params[:password])
            token = encode_token({user_id: @user.id})
            render json: UsersSerializer.new(@user, {params: {token: token}}).serialized_json
        else
            # error here should be more meaningful and be either a 400 code
            render json: {error: "Invalid username or password"}
        end
    end

    # auth based on JWT
    def auto_login
        render json: @user
    end

    private

    def user_params
        params.permit(
            :username, 
            :password, 
            :roles, 
            :first_name, 
            :last_name, 
            :mobile_number, 
            :email_address,
            :role
            )
    end

end
