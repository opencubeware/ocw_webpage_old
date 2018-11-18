defmodule OcwWebpageWeb.Schemas.Round do
  use Ecto.Schema

  schema "rounds" do
    belongs_to(:round_name, RoundName,
      foreign_key: :round_name_id,
      references: :name_id,
      type: :integer
    )
  end
end
