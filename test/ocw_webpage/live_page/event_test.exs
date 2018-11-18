defmodule OcwWebpage.LivePage.EventTest do
  use OcwWebpage.DataCase, async: true

  alias OcwWebpage.LivePage.Event

  describe "name/1" do
    test "displays name of related event_name" do
      event_name = build(:event_name, name: "TestName")
      event = build(:event, event_name: event_name)
      assert Event.name(event) == {:ok, "TestName"}
    end

    test "displays error message when event_name is not definned" do
      insert(:event, event_name: nil)
      [event] = Repo.all(Event)

      assert Event.name(event) == {:error, :event_does_not_have_name}
    end

    test "displays error message when event_name not preloaded" do
      event_name = build(:event_name, name: "TestName")
      insert(:event, event_name: event_name)
      [event] = Repo.all(Event)

      assert Event.name(event) == {:error, :event_name_not_preloaded}
    end
  end
end
