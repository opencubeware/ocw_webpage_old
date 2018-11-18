defmodule OcwWebpageWeb.Router do
  use OcwWebpageWeb, :router

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/api", OcwWebpageWeb do
    pipe_through(:api)

    scope "/v1" do
      get(
        "/tournaments/:tournament_id/events/:event_name/rounds/:round_name",
        Api.V1.Rounds,
        :show
      )
    end
  end

  scope "/", OcwWebpageWeb do
    pipe_through(:browser)
    get("/*path", PageController, :index)
  end
end
