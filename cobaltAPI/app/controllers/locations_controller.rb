class LocationsController < ApplicationController

    def index
        locations = Location.all
        render json: LocationsSerializer.new(locations).serialized_json
    end
    

end
