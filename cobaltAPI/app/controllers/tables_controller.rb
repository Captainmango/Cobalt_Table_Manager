class TablesController < ApplicationController

    def index
        tables = Table.all
        render json: TablesSerializer.new(tables).serialized_json
    end
      
end
