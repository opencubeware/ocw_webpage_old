defmodule OcwWebpageWeb.Schemas.Event do
  use Ecto.Schema

  schema "events" do
    belongs_to(:event_name, EventName,
      foreign_key: :event_name_id,
      references: :name_id,
      type: :integer
    )
  end
end
