defmodule OcwWebpageWeb.Schemas.Tournament do
  use Ecto.Schema

  schema "tournaments" do
    field(:name, :string)
  end
end
