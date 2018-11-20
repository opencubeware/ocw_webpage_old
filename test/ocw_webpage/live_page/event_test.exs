defmodule OcwWebpage.LivePage.EventTest do
  use OcwWebpage.DataCase, async: true

  alias OcwWebpage.LivePage.Event
  alias OcwWebpage.Constants.EventName

  describe "name/1" do
    setup do
      [event_name | _] = Repo.all(EventName)

      %{
        tournament: build(:tournament),
        event_name: event_name
      }
    end

    test "displays name of related event_name", %{tournament: tournament, event_name: event_name} do
      event = build(:event, event_name: event_name, tournament: tournament)
      assert Event.name(event) == {:ok, "3x3x3"}
    end

    test "displays error message when event_name is not definned", %{tournament: tournament} do
      insert(:event, event_name: nil, tournament: tournament)
      [event] = Repo.all(Event)

      assert Event.name(event) == {:error, :event_does_not_have_name}
    end

    test "displays error message when event_name not preloaded", %{
      tournament: tournament,
      event_name: event_name
    } do
      insert(:event, event_name: event_name, tournament: tournament)
      [event] = Repo.all(Event)

      assert Event.name(event) == {:error, :event_name_not_preloaded}
    end
  end
end
