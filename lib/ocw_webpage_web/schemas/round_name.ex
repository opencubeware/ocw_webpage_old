defmodule OcwWebpageWeb.Schemas.RoundName do
  use Ecto.Schema

  schema "round_names" do
    field(:name, :string)
    field(:round_name_id, :integer)
  end
end
