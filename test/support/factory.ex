defmodule OcwWebpage.Factory do
  use ExMachina.Ecto, repo: OcwWebpage.Repo
  alias OcwWebpage.LivePage.{Event, Round}
  alias OcwWebpage.Constants.{EventName, RoundName}

  def event_factory() do
    %Event{
      event_name: build(:event_name)
    }
  end

  def event_name_factory() do
    %EventName{
      name: "3x3x3",
      name_id: 1
    }
  end

  def round_factory() do
    %Round{
      round_name: build(:round_name)
    }
  end

  def round_name_factory() do
    %RoundName{
      name: "First Round",
      name_id: 1
    }
  end
end
