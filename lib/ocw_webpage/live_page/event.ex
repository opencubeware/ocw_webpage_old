defmodule OcwWebpage.LivePage.Event do
  alias OcwWebpageWeb.Schemas.{Event, EventName}

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
