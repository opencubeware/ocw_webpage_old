# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :ocw_webpage,
  ecto_repos: [OcwWebpage.Repo]

# Configures the endpoint
config :ocw_webpage, OcwWebpageWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "LIVKytyfIw7V1QH2cS7Iyxihuvd3IbX0p5bRpDBznIfw0M3SyDlIRZb9286xMOTJ",
  render_errors: [view: OcwWebpageWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: OcwWebpage.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
