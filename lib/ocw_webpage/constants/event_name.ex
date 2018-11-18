defmodule OcwWebpage.Constants.EventName do
  use Ecto.Schema
  alias OcwWebpage.LivePage.Event

  schema "event_names" do
    field(:name, :string)
    field(:name_id, :integer)
    has_one(:event, Event, foreign_key: :event_name_id, references: :name_id)
  end

  def event_name_map("3x3x3Blindfolded"), do: "3x3x3 Blindfolded"
  def event_name_map("3x3x3FewestMoves"), do: "3x3x3 Fewest Moves"
  def event_name_map("3x3x3OneHanded"), do: "3x3x3 One-Handed"
  def event_name_map("3x3x3WithFeet"), do: "3x3x3 With Feet"
  def event_name_map("4x4x4Blindfolded"), do: "4x4x4 Blindfolded"
  def event_name_map("5x5x5Blindfolded"), do: "5x5x5 Blindfolded"
  def event_name_map("3x3x3MultiBlind"), do: "3x3x3 Multi-Blind"
  def event_name_map(single_word_name), do: single_word_name
end
