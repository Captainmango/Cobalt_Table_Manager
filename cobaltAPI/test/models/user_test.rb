require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "should save with an email address" do
    user = User.new
    user.email = "test@test.com"
    assert user.save, "user needs an email address"
  end
end
