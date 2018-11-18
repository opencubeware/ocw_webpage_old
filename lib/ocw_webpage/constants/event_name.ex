defmodule OcwWebpage.Constants.EventName do
  use Ecto.Schema
  alias OcwWebpage.LivePage.Event

  schema "event_names" do
    field(:name, :string)
    field(:name_id, :integer)
    has_one(:event, Event, foreign_key: :event_name_id, references: :name_id)
  end
end
