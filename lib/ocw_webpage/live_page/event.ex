defmodule OcwWebpage.LivePage.Event do
  use Ecto.Schema
  alias OcwWebpage.LivePage.{Event, Round, Tournament}
  alias OcwWebpage.Constants.EventName

  schema "events" do
    belongs_to(:event_name, EventName,
      foreign_key: :event_name_id,
      references: :name_id,
      type: :integer
    )

    belongs_to(:tournament, Tournament)
    has_many(:rounds, Round)
  end

  def name(%Event{event_name: %EventName{name: _name}} = preloaded_event) do
    {:ok, preloaded_event.event_name.name}
  end

  def name(%Event{event_name: %Ecto.Association.NotLoaded{}, event_name_id: nil}) do
    {:error, :event_does_not_have_name}
  end

  def name(%Event{event_name: %Ecto.Association.NotLoaded{}, event_name_id: _id}) do
    {:error, :event_name_not_preloaded}
  end
end
