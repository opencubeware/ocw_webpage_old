defmodule OcwWebpageWeb.Schemas.RoundName do
  use Ecto.Schema

  schema "round_names" do
    field(:name, :string)
    field(:name_id, :integer)
  end
end
