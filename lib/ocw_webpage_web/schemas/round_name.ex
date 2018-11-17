defmodule OcwWebpageWeb.Schemas.RoundName do
  use Ecto.Schema

  schema "round_names" do
    field(:name, :string)
  end
end
