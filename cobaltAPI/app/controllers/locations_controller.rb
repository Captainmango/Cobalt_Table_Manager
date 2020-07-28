class LocationsController < ApplicationController

    def my_locations
        user = User.find_by(id: loc_params[:user_id])
        locations = user.location
        render json: LocationsSerializer.new(locations).serialized_json
    end

    def index
        locations = Location.all
        render json: LocationsSerializer.new(locations).serialized_json
    end

    private

    def loc_params
        params.permit(
            :user_id
            )
    end
    

end
