defmodule OcwWebpage.LivePage.RoundTest do
  use OcwWebpage.DataCase, async: true

  alias OcwWebpage.LivePage.Round
  alias OcwWebpage.Constants.{EventName, RoundName}

  describe "name/1" do
    setup do
      tournament = build(:tournament)
      [event_name | _] = Repo.all(EventName)
      [round_name | _] = Repo.all(RoundName)
      event = insert(:event, tournament: tournament, event_name: event_name)

      %{event: event, round_name: round_name}
    end

    test "displays name of related round_name", %{event: event, round_name: round_name} do
      round = build(:round, event: event, round_name: round_name)
      assert Round.name(round) == {:ok, "First Round"}
    end

    test "displays error message when round_name is not definned", %{event: event} do
      insert(:round, event: event)
      [round] = Repo.all(Round)

      assert Round.name(round) == {:error, :round_does_not_have_name}
    end

    test "displays error message when round_name not preloaded", %{
      event: event,
      round_name: round_name
    } do
      insert(:round, event: event, round_name: round_name)
      [round] = Repo.all(Round)

      assert Round.name(round) == {:error, :round_name_not_preloaded}
    end
  end
end
