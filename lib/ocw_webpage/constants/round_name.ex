defmodule OcwWebpage.Constants.RoundName do
  use Ecto.Schema

  schema "round_names" do
    field(:name, :string)
    field(:name_id, :integer)
  end

  def round_name_map("FirstRound"), do: "First Round"
  def round_name_map("SecondRound"), do: "Second Round"
  def round_name_map("FinalRound"), do: "Final Round"
  def round_name_map("CombinedFirst"), do: "Combined First"
  def round_name_map("CombinedFinal"), do: "Combined Final"
end
