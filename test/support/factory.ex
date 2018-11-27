defmodule OcwWebpage.Factory do
  use ExMachina.Ecto, repo: OcwWebpage.Repo
  alias OcwWebpage.DataAccess.Schemas.{Event, Person, Result, Round, Tournament}
  alias OcwWebpage.Constants.{EventName, RoundName}

  def person_factory() do
    %Person{
      first_name: "John",
      last_name: "Doe",
      wca_id: "fake_wca_id",
      country: "Poland"
    }
  end

  def tournament_factory(), do: %Tournament{name: "Cracow Open 2019"}

  def event_factory() do
    %Event{tournament: nil}
  end

  def round_factory() do
    %Round{event: nil}
  end

  def result_factory() do
    %Result{
      attempts: ["00:05.10", "00:07.11", "00:06.89", "00:08.50", "00:07.60"],
      competitor_id: nil,
      round: nil
    }
  end

  def event_name_factory() do
    %EventName{
      name: "3x3x3"
    }
  end

  def round_name_factory() do
    %RoundName{
      name: "First Round"
    }
  end
end
