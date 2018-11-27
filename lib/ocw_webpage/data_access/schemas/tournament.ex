defmodule OcwWebpage.DataAccess.Schemas.Tournament do
  use Ecto.Schema

  alias OcwWebpage.DataAccess.Schemas.Event

  schema "tournaments" do
    field(:name, :string)
    has_many(:events, Event, foreign_key: :tournament_id)
  end
end
