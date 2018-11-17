defmodule OcwWebpageWeb.Schemas.EventName do
  use Ecto.Schema

  schema "event_names" do
    field(:name, :string)
    field(:name_id, :integer)
  end
end
