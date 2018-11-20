defmodule OcwWebpage.LivePage.Tournament do
  use Ecto.Schema

  alias OcwWebpage.LivePage.Event

  schema "tournaments" do
    field(:name, :string)
    has_many(:events, Event, foreign_key: :tournament_id)
  end
end
