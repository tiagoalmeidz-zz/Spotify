class Song < ApplicationRecord
  belongs_to :album

  validades :title, presence: true
  has_one_attached :file
end
