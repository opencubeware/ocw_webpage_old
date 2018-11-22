defmodule OcwWebpage.DataAccess.Schemas.Round do
  use Ecto.Schema

  alias OcwWebpage.DataAccess.Schemas.{Event, Result}
  alias OcwWebpage.Constants.RoundName

  schema "rounds" do
    belongs_to(:round_name, RoundName,
      foreign_key: :round_name_id,
      references: :name_id,
      type: :integer
    )

    has_many(:results, Result)
    belongs_to(:event, Event)
  end
end
