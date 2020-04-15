class Album < ApplicationRecord
  belongs_to :category
  belongs_to :artist

  has_many :songs

  validades :title, precense: true
  validades :date, precense: true

  has_one_attached :cover
end
