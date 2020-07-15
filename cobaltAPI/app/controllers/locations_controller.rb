class LocationsController < ApplicationController

    def index
        user = User.find_by(id: loc_params[:user_id])
        locations = user.location
        render json: LocationsSerializer.new(locations).serialized_json
    end

    private

    def loc_params
        params.permit(
            :user_id
            )
    end
    

end
