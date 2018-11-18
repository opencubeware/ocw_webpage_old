defmodule OcwWebpage.Factory do
  use ExMachina.Ecto, repo: OcwWebpage.Repo
  alias OcwWebpage.LivePage.Event
  alias OcwWebpage.Constants.EventName

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
end
