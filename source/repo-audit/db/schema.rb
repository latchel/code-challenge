# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170130031929) do

  create_table "contributors", force: :cascade do |t|
    t.string   "login"
    t.integer  "github_id"
    t.string   "avatar_url"
    t.string   "url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "month_additions"
    t.integer  "month_deletions"
    t.integer  "month_commits"
  end

  create_table "weeks", force: :cascade do |t|
    t.integer  "contributor_id"
    t.integer  "weekstart"
    t.integer  "additions"
    t.integer  "deletions"
    t.integer  "commits"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

end
