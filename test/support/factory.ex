defmodule OcwWebpage.Factory do
  use ExMachina.Ecto, repo: OcwWebpage.Repo
  alias OcwWebpage.LivePage.{Event, Round}
  alias OcwWebpage.Constants.{EventName, RoundName}

  def event_factory() do
    %Event{}
  end

  def event_name_factory() do
    %EventName{
      name: "3x3x3",
      name_id: 1
    }
  end

  def round_factory() do
    %Round{}
  end

  def round_name_factory() do
    %RoundName{
      name: "First Round",
      name_id: 1
    }
  end

  def with_event(%EventName{} = event_name) do
    insert(:event, event_name: event_name)
  end

  def with_round(%RoundName{} = round_name) do
    insert(:round, round_name: round_name)
  end
end
