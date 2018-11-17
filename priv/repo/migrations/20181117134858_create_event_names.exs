defmodule OcwWebpage.Repo.Migrations.CreateEventNames do
  use Ecto.Migration

  def change do
    create table(:event_names) do
      add(:name, :string, null: false)
      add(:name_id, :integer, null: false)
    end

    create(unique_index(:event_names, [:name_id]))
  end
end
