defmodule OcwWebpage.Model.Event do
  defstruct([:name])

  def new(%{event_name: %{name: event_name}}) do
    struct(__MODULE__, %{name: event_name})
  end

  def to_map(struct), do: Map.from_struct(struct)
end
