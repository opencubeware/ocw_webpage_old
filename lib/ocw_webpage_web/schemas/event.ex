defmodule OcwWebpageWeb.Schemas.Event do
  use Ecto.Schema
  alias OcwWebpageWeb.Schemas.{Event, EventName}

  schema "events" do
    belongs_to(:event_name, EventName,
      foreign_key: :event_name_id,
      references: :name_id,
      type: :integer
    )
  end

  def name(%Event{event_name: %EventName{name: _name}} = preloaded_event) do
    preloaded_event.event_name.name
  end

  def name(%Event{event_name: %Ecto.Association.NotLoaded{}, event_name_id: nil}) do
    "Event does not have name"
  end

  def name(%Event{event_name: %Ecto.Association.NotLoaded{}, event_name_id: _id}) do
    "EventName not preloaded"
  end
end
