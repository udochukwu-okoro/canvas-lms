/*
 * Copyright (C) 2021 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import formatMessage from '../../format-message'
import '../tinymce/th'

const locale = {
  "access_the_pretty_html_editor_37168efe": {
    "message": "เข้าไปยัง HTML Editor ที่สวยงาม"
  },
  "accessibility_checker_b3af1f6c": { "message": "ระบบตรวจสอบการใช้งาน" },
  "add_8523c19b": { "message": "เพิ่ม" },
  "add_another_f4e50d57": { "message": "เพิ่มรายการอื่น" },
  "add_cc_subtitles_55f0394e": { "message": "เพิ่ม CC/คำบรรยาย" },
  "add_image_60b2de07": { "message": "เพิ่มภาพ" },
  "align_11050992": { "message": "จัดตำแหน่ง" },
  "align_center_ca078feb": { "message": "จัดกลาง" },
  "align_left_e9f1f93b": { "message": "ชิดซ้าย" },
  "align_right_9bad3ac1": { "message": "ชิดขวา" },
  "alignment_and_lists_5cebcb69": { "message": "การจัดตำแหน่งและรายการต่าง ๆ" },
  "all_4321c3a1": { "message": "ทั้งหมด" },
  "all_apps_a50dea49": { "message": "แอพทั้งหมด" },
  "alphabetical_55b5b4e0": { "message": "ตามลำดับตัวอักษร" },
  "alt_text_611fb322": { "message": "ข้อความเผื่อเลือก" },
  "an_error_occured_reading_the_file_ff48558b": {
    "message": "เกิดข้อผิดพลาดขณะอ่านไฟล์"
  },
  "an_error_occurred_making_a_network_request_d1bda348": {
    "message": "เกิดข้อผิดพลาดขณะทำคำขอผ่านเครือข่าย"
  },
  "an_error_occurred_uploading_your_media_71f1444d": {
    "message": "เกิดข้อผิดพลาดขณะอัพโหลดสื่อของคุณ"
  },
  "announcement_list_da155734": { "message": "รายการประกาศ" },
  "announcements_a4b8ed4a": { "message": "ประกาศ" },
  "apply_781a2546": { "message": "ปรับใช้" },
  "apply_changes_to_all_instances_of_this_button_and__3a3bea34": {
    "message": "ปรับใช้การเปลี่ยนแปลงกับส่วนรายการทั้งหมดปุ่มและไอคอนนี้ในบทเรียนนี้"
  },
  "apps_54d24a47": { "message": "แอพ" },
  "arrows_464a3e54": { "message": "ลูกศร" },
  "art_icon_8e1daad": { "message": "ไอคอนอาร์ตเวิร์ค" },
  "aspect_ratio_will_be_preserved_cb5fdfb8": {
    "message": "สัดส่วนจะถูกรักษาไว้ตามเดิม"
  },
  "assignments_1e02582c": { "message": "ภารกิจ" },
  "attributes_963ba262": { "message": "คุณลักษณะ" },
  "audio_and_video_recording_not_supported_please_use_5ce3f0d7": {
    "message": "ไม่รองรับบันทึกเสียงและภาพ กรุณาใช้เบราเซอร์อื่น"
  },
  "audio_options_feb58e2c": { "message": "ตัวเลือกเสียง" },
  "audio_options_tray_33a90711": { "message": "ถาดตัวเลือกเสียง" },
  "audio_player_for_title_20cc70d": {
    "message": "เครื่องเล่นเสียงสำหรับ { title }"
  },
  "auto_saved_content_exists_would_you_like_to_load_t_fee528f2": {
    "message": "มีเนื้อหาบันทึกอัตโนมัติ ต้องการโหลดเนื้อหาบันทึกอัตโนมัติแทนหรือไม่"
  },
  "available_folders_694d0436": { "message": "โฟลเดอร์ที่ใช้ได้" },
  "basic_554cdc0a": { "message": "พื้นฐาน" },
  "below_81d4dceb": { "message": "ด้านล่าง" },
  "bottom_third_5f5fec1d": { "message": "อันดับที่สามจากด้านล่าง" },
  "button_color_608a0242": { "message": "สีปุ่ม" },
  "button_outline_cf14f071": { "message": "กรอบปุ่ม" },
  "button_outline_size_cc1d1df7": { "message": "ขนาดกรอบปุ่ม" },
  "button_shape_dbecb573": { "message": "รูปทรงปุ่ม" },
  "button_size_20f5fce1": { "message": "ขนาดปุ่ม" },
  "buttons_and_icons_e66ee12c": { "message": "ปุ่มและไอคอน" },
  "c_2001_acme_inc_283f7f80": { "message": "(c) 2001 Acme Inc." },
  "cancel_caeb1e68": { "message": "ยกเลิก" },
  "choose_caption_file_9c45bc4e": { "message": "เลือกไฟล์คำบรรยาย" },
  "choose_usage_rights_33683854": { "message": "เลือกสิทธิ์การใช้งาน..." },
  "circle_484abe63": { "message": "วงกลม" },
  "circle_unordered_list_9e3a0763": {
    "message": "วงเลือกรายการที่ไม่ได้จัดลำดับ"
  },
  "clear_2084585f": { "message": "ล้าง" },
  "clear_image_3213fe62": { "message": "ล้างภาพ" },
  "clear_selected_file_82388e50": { "message": "ล้างไฟล์ที่เลือก" },
  "clear_selected_file_filename_2fe8a58e": {
    "message": "ล้างไฟล์ที่เลือก: { filename }"
  },
  "click_or_shift_click_for_the_html_editor_25d70bb4": {
    "message": "คลิกหรือ shift-คลิก สำหรับ HTML Editor"
  },
  "click_to_embed_imagename_c41ea8df": {
    "message": "คลิกเพื่อผนวก { imageName }"
  },
  "click_to_hide_preview_3c707763": {
    "message": "คลิกเพื่อซ่อนการแสดงตัวอย่าง"
  },
  "click_to_insert_a_link_into_the_editor_c19613aa": {
    "message": "คลิกเพื่อแทรกลิงค์ไปยังโปรแกรมแก้ไข"
  },
  "click_to_show_preview_faa27051": { "message": "คลิกเพื่อแสดงตัวอย่าง" },
  "close_a_menu_or_dialog_also_returns_you_to_the_edi_739079e6": {
    "message": "ปิดเมนูหรือกล่องโต้ตอบ และนำคุณกลับไปที่โปรแกรมแก้ไข"
  },
  "close_d634289d": { "message": "ปิด" },
  "closed_caption_file_must_be_less_than_maxkb_kb_5880f752": {
    "message": "ไฟล์คำบรรยายแบบปิดได้จะต้องมีขนาดน้อยกว่า { maxKb } kb"
  },
  "closed_captions_subtitles_e6aaa016": { "message": "คำบรรยายแบบซ่อนได้" },
  "collaborations_5c56c15f": { "message": "การประสานความร่วมมือ" },
  "collapse_to_hide_types_1ab46d2e": { "message": "ย่อเพื่อซ่อน { types }" },
  "color_color_eb64b08": { "message": "สี { color }" },
  "computer_1d7dfa6f": { "message": "คอมพิวเตอร์" },
  "content_1440204b": { "message": "ข้อมูล" },
  "content_is_still_being_uploaded_if_you_continue_it_8f06d0cb": {
    "message": "เนื้อหายังอัพโหลดอยู่ หากคุณดำเนินการต่อ ข้อมูลจะไม่ถูกผนวกอย่างถูกต้อง"
  },
  "content_subtype_5ce35e88": { "message": "ประเภทเนื้อหาย่อย" },
  "content_type_2cf90d95": { "message": "ประเภทเนื้อหา" },
  "copyright_holder_66ee111": { "message": "ผู้ถือลิขสิทธิ์:" },
  "count_plural_0_0_words_one_1_word_other_words_acf32eca": {
    "message": "{ count, plural,\n     =0 {0 คำ}\n    one {1 คำ}\n  other {# คำ}\n}"
  },
  "count_plural_one_item_loaded_other_items_loaded_857023b7": {
    "message": "{ count, plural,\n    one {# รายการที่โหลด}\n  other {# รายการที่โหลด}\n}"
  },
  "course_documents_104d76e0": { "message": "เอกสารสำหรับบทเรียน" },
  "course_files_62deb8f8": { "message": "ไฟล์บทเรียน" },
  "course_files_a31f97fc": { "message": "ไฟล์บทเรียน" },
  "course_images_f8511d04": { "message": "ภาพในบทเรียน" },
  "course_links_b56959b9": { "message": "ลิงค์บทเรียน" },
  "course_media_ec759ad": { "message": "สื่อสำหรับบทเรียน" },
  "course_navigation_dd035109": { "message": "การสืบค้นเนื้อหาบทเรียน" },
  "create_button_and_icon_5c089934": { "message": "จัดทำปุ่มและไอคอน" },
  "creative_commons_license_725584ae": {
    "message": "สิทธิ์ใช้งาน Creative Commons:"
  },
  "crop_image_41bf940c": { "message": "ครอปภาพ" },
  "crop_image_807ebb08": { "message": "ครอปภาพ" },
  "current_image_f16c249c": { "message": "ภาพปัจจุบัน" },
  "custom_6979cd81": { "message": "กำหนดเอง" },
  "date_added_ed5ad465": { "message": "วันที่ที่เพิ่ม" },
  "decorative_image_3c28aa7d": { "message": "ภาพตกแต่ง" },
  "decrease_indent_de6343ab": { "message": "ลดการเยื้อง" },
  "default_bulleted_unordered_list_47079da8": {
    "message": "รายการที่ไม่ได้จัดลำดับแบบมีหัวข้อย่อยเริ่มต้น"
  },
  "default_numerical_ordered_list_48dd3548": {
    "message": "รายการที่จัดลำดับแบบมีตัวเลขกำกับเริ่มต้น"
  },
  "delimiters_4db4840d": { "message": "ตัวคั่น" },
  "describe_the_image_e65d2e32": { "message": "(ระบุรายละเอียดภาพ)" },
  "describe_the_video_2fe8f46a": { "message": "(ระบุรายละเอียดวิดีโอ)" },
  "details_98a31b68": { "message": "รายละเอียด" },
  "diamond_b8dfe7ae": { "message": "เพชร" },
  "dimension_type_55c83e4e": { "message": "ประเภทขนาด" },
  "dimensions_45ddb7b7": { "message": "ขนาด" },
  "directionality_26ae9e08": { "message": "ทิศทาง" },
  "directly_edit_latex_b7e9235b": { "message": "แก้ไข LaTeX โดยตรง" },
  "discussions_a5f96392": { "message": "การพูดคุย" },
  "discussions_index_6c36ced": { "message": "ดัชนีการพูดคุย" },
  "display_options_315aba85": { "message": "แสดงตัวเลือก" },
  "display_text_link_opens_in_a_new_tab_75e9afc9": {
    "message": "แสดงลิงค์ข้อความ (เปิดในแท็บใหม่)"
  },
  "document_678cd7bf": { "message": "เอกสาร" },
  "documents_81393201": { "message": "เอกสาร" },
  "done_54e3d4b6": { "message": "เสร็จสิ้น" },
  "drag_a_file_here_1bf656d5": { "message": "ลากไฟล์ที่นี่" },
  "drag_and_drop_or_click_to_browse_your_computer_60772d6d": {
    "message": "ลากและวาง หรือคลิกเพื่อเรียกดูในคอมพิวเตอร์ของคุณ"
  },
  "drag_handle_use_up_and_down_arrows_to_resize_e29eae5c": {
    "message": "ลากที่มือจับ ใช้ลูกศรขึ้นและลงเพื่อปรับขนาด"
  },
  "due_multiple_dates_cc0ee3f5": { "message": "ครบกำหนด: วันที่หลายรายการ" },
  "due_when_7eed10c6": { "message": "ครบกำหนด: { when }" },
  "edit_c5fbea07": { "message": "แก้ไข" },
  "edit_equation_f5279959": { "message": "แก้ไขสมการ" },
  "edit_existing_button_icon_3d0277bd": {
    "message": "แก้ไขปุ่ม/ไอคอนในปัจจุบัน"
  },
  "edit_link_7f53bebb": { "message": "แก้ไขลิงค์" },
  "editor_statusbar_26ac81fc": { "message": "แถบสถานะโปรแกรมแก้ไข" },
  "embed_828fac4a": { "message": "ผนวก" },
  "embed_code_314f1bd5": { "message": "ผนวกรหัส" },
  "embed_image_1080badc": { "message": "ผนวกภาพ" },
  "embed_options_tray_901cfd19": { "message": "ผนวกถาดเผื่อเลือก" },
  "embed_preview_2d741e1f": { "message": "ผนวกการแสดงตัวอย่าง" },
  "embed_video_a97a64af": { "message": "ผนวกวิดีโอ" },
  "embedded_content_aaeb4d3d": { "message": "เนื้อหาที่ผนวก" },
  "engineering_icon_f8f3cf43": { "message": "ไอคอนวิศวกรรม" },
  "english_icon_25bfe845": { "message": "ไอคอนอังกฤษ" },
  "enter_at_least_3_characters_to_search_4f037ee0": {
    "message": "กรอกอย่างน้อย 3 ตัวอักษรเพื่อค้นหา"
  },
  "equation_1c5ac93c": { "message": "สมการ" },
  "equation_editor_39fbc3f1": { "message": "ตัวแก้ไขสมการ" },
  "expand_preview_by_default_2abbf9f8": {
    "message": "ขยายตัวอย่างเป็นค่าเริ่มต้น"
  },
  "expand_to_see_types_f5d29352": { "message": "ขยายเพื่อดู { types }" },
  "external_links_3d9f074e": { "message": "ลิงค์จากภายนอก" },
  "external_tools_6e77821": { "message": "เครื่องมือจากภายนอก" },
  "extra_large_b6cdf1ff": { "message": "ใหญ่พิเศษ" },
  "extra_small_9ae33252": { "message": "เล็กพิเศษ" },
  "extracurricular_icon_67c8ca42": { "message": "ไอคอนกิจกรรมนอกหลักสูตร" },
  "file_url_c12b64be": { "message": "URL ไฟล์" },
  "filename_file_icon_602eb5de": { "message": "ไอคอนไฟล์ { filename }" },
  "filename_image_preview_6cef8f26": {
    "message": "แสดงตัวอย่างภาพ { filename }"
  },
  "filename_text_preview_e41ca2d8": {
    "message": "แสดงตัวอย่างข้อความ { filename }"
  },
  "files_c300e900": { "message": "ไฟล์" },
  "files_index_af7c662b": { "message": "ดัชนีไฟล์" },
  "focus_element_options_toolbar_18d993e": {
    "message": "ปรับโฟกัสแถบเครื่องมือตัวเลือกส่วนประกอบ"
  },
  "folder_tree_fbab0726": { "message": "โครงสร้างโฟลเดอร์" },
  "format_4247a9c5": { "message": "รูปแบบ" },
  "formatting_5b143aa8": { "message": "การกำหนดรูปแบบ" },
  "found_auto_saved_content_3f6e4ca5": {
    "message": "พบเนื้อหาบันทึกอัตโนมัติ"
  },
  "found_count_plural_0_results_one_result_other_resu_46aeaa01": {
    "message": "พบ { count, plural,\n     =0 {# ผลลัพธ์}\n    one {# ผลลัพธ์}\n  other {# ผลลัพธ์}\n}"
  },
  "fullscreen_873bf53f": { "message": "เต็มหน้าจอ" },
  "generating_preview_45b53be0": { "message": "กำลังจัดทำตัวอย่างจัดแสดง..." },
  "go_to_the_editor_s_menubar_e6674c81": {
    "message": "ไปที่แถบเมนูของโปรแกรมแก้ไข"
  },
  "go_to_the_editor_s_toolbar_a5cb875f": {
    "message": "ไปที่แถบเครื่องมือของโปรแกรมแก้ไข"
  },
  "grades_a61eba0a": { "message": "เกรด" },
  "greek_65c5b3f7": { "message": "กรีก" },
  "group_documents_8bfd6ae6": { "message": "เอกสารของกลุ่ม" },
  "group_files_4324f3df": { "message": "ไฟล์ของกลุ่ม" },
  "group_files_82e5dcdb": { "message": "ไฟล์ของกลุ่ม" },
  "group_images_98e0ac17": { "message": "ภาพกลุ่ม" },
  "group_links_9493129e": { "message": "ลิงค์ของกลุ่ม" },
  "group_media_2f3d128a": { "message": "สื่อของกลุ่ม" },
  "group_navigation_99f191a": { "message": "การสืบค้นเนื้อหาของกลุ่ม" },
  "heading_2_5b84eed2": { "message": "หัวเรื่อง 2" },
  "heading_3_2c83de44": { "message": "หัวเรื่อง 3" },
  "heading_4_b2e74be7": { "message": "หัวเรื่อง 4" },
  "health_icon_8d292eb5": { "message": "ไอคอนสุขภาพ" },
  "height_69b03e15": { "message": "ความสูง" },
  "hexagon_d8468e0d": { "message": "หกเหลี่ยม" },
  "hide_description_bfb5502e": { "message": "ซ่อนรายละเอียด" },
  "hide_title_description_caf092ef": { "message": "ซ่อนรายละเอียด { title }" },
  "home_351838cd": { "message": "หน้าหลัก" },
  "html_code_editor_fd967a44": { "message": "โปรแกรมแก้ไขรหัส HTML" },
  "html_editor_fb2ab713": { "message": "HTML Editor" },
  "i_have_obtained_permission_to_use_this_file_6386f087": {
    "message": "ฉันได้รับสิทธิ์อนุญาตให้ใช้ไฟล์นี้"
  },
  "i_hold_the_copyright_71ee91b1": { "message": "ฉันถือลิขสิทธิ์" },
  "icon_color_b86dd6d6": { "message": "สีไอคอน" },
  "if_you_do_not_select_usage_rights_now_this_file_wi_14e07ab5": {
    "message": "หากคุณไม่เลือกสิทธิ์การใช้งาน ไฟล์นี้จะถูกเลิกเผยแพร่หลังจากอัพโหลดแล้ว"
  },
  "image_8ad06": { "message": "ภาพ" },
  "image_options_5412d02c": { "message": "ตัวเลือกภาพ" },
  "image_options_tray_90a46006": { "message": "ถาดตัวเลือกภาพ" },
  "image_to_crop_3a34487d": { "message": "ภาพที่จะครอป" },
  "images_7ce26570": { "message": "ภาพ" },
  "increase_indent_6d550a4a": { "message": "เพิ่มการเยื้อง" },
  "insert_593145ef": { "message": "ใบกัด" },
  "insert_equella_links_49a8dacd": { "message": "แทรกลิงค์ Equella" },
  "insert_link_6dc23cae": { "message": "แทรกลิงค์" },
  "insert_math_equation_57c6e767": { "message": "แทรกสมการทางคณิตศาสตร์" },
  "invalid_file_c11ba11": { "message": "ไฟล์ไม่ถูกต้อง" },
  "invalid_file_type_881cc9b2": { "message": "ประเภทไฟล์ไม่ถูกต้อง" },
  "invalid_url_cbde79f": { "message": "URL ไม่ถูกต้อง" },
  "keyboard_shortcuts_ed1844bd": { "message": "ชอร์ตคัทแป้นพิมพ์" },
  "language_arts_icon_a798b0f8": { "message": "ไอคอนศิลปศาสตร์ด้านภาษา" },
  "languages_icon_9d20539": { "message": "ไอคอนภาษา" },
  "large_9c5e80e7": { "message": "ใหญ่" },
  "left_to_right_e9b4fd06": { "message": "ซ้ายไปขวา" },
  "library_icon_ae1e54cf": { "message": "ไอคอนห้องสมุด" },
  "link_7262adec": { "message": "ลิงค์" },
  "link_options_a16b758b": { "message": "ตัวเลือกลิงค์" },
  "links_14b70841": { "message": "ลิงค์" },
  "load_more_35d33c7": { "message": "โหลดเพิ่มเติม" },
  "load_more_results_460f49a9": { "message": "โหลดผลลัพธ์เพิ่มเติม" },
  "loading_25990131": { "message": "กำลังโหลด..." },
  "loading_bde52856": { "message": "กำลังโหลด" },
  "loading_failed_b3524381": { "message": "โหลดล้มเหลว..." },
  "loading_failed_e6a9d8ef": { "message": "โหลดล้มเหลว..." },
  "loading_folders_d8b5869e": { "message": "กำลังโหลดโฟลเดอร์" },
  "loading_please_wait_d276220a": { "message": "กำลังโหลด กรุณารอสักครู่" },
  "loading_preview_9f077aa1": { "message": "กำลังโหลดตัวอย่าง" },
  "locked_762f138b": { "message": "ล็อคแล้ว" },
  "math_icon_ad4e9d03": { "message": "ไอคอนคณิตศาสตร์" },
  "media_af190855": { "message": "มีเดีย" },
  "medium_5a8e9ead": { "message": "ปานกลาง" },
  "middle_27dc1d5": { "message": "ตรงกลาง" },
  "misc_3b692ea7": { "message": "เบ็ดเตล็ด" },
  "miscellaneous_e9818229": { "message": "เบ็ดเตล็ด" },
  "modules_c4325335": { "message": "หน่วยการเรียน" },
  "multi_color_image_63d7372f": { "message": "ภาพหลายสี" },
  "music_icon_4db5c972": { "message": "ไอคอนดนตรี" },
  "must_be_at_least_percentage_22e373b6": {
    "message": "จะต้องเท่ากับอย่างน้อย { percentage }%"
  },
  "must_be_at_least_width_x_height_px_41dc825e": {
    "message": "จะต้องเท่ากับอย่างน้อย { width } x { height }px"
  },
  "my_files_2f621040": { "message": "ไฟล์ของฉัน" },
  "name_1aed4a1b": { "message": "ชื่อ" },
  "navigate_through_the_menu_or_toolbar_415a4e50": {
    "message": "ดูรายการเมนูหรือแถบเครื่องมือ"
  },
  "next_page_d2a39853": { "message": "หน้าถัดไป" },
  "no_e16d9132": { "message": "ไม่" },
  "no_file_chosen_9a880793": { "message": "ไม่มีไฟล์ที่เลือก" },
  "no_preview_is_available_for_this_file_f940114a": {
    "message": "ไม่มีตัวอย่างแสดงสำหรับไฟล์นี้"
  },
  "no_results_940393cf": { "message": "ไม่มีผลลัพธ์" },
  "no_results_found_for_filterterm_ad1b04c8": {
    "message": "ไม่พบผลลัพธ์สำหรับ { filterTerm }"
  },
  "no_results_found_for_term_1564c08e": {
    "message": "ไม่พบผลลัพธ์สำหรับ { term }"
  },
  "none_3b5e34d2": { "message": "ไม่มี" },
  "none_selected_b93d56d2": { "message": "ไม่ได้เลือกรายการใด" },
  "octagon_e48be9f": { "message": "แปดเหลี่ยม" },
  "open_this_keyboard_shortcuts_dialog_9658b83a": {
    "message": "เปิดกล่องโต้ตอบชอร์ตคัทแป้นพิมพ์นี้"
  },
  "open_title_application_fd624fc5": {
    "message": "เปิดแอพพลิเคชั่น { title }"
  },
  "operators_a2ef9a93": { "message": "ผู้ดำเนินการ" },
  "options_3ab0ea65": { "message": "ตัวเลือก" },
  "ordered_and_unordered_lists_cfadfc38": {
    "message": "รายการที่จัดลำดับและไม่ได้จัดลำดับ"
  },
  "other_editor_shortcuts_may_be_found_at_404aba4a": {
    "message": "ชอร์ตคัทโปรแกรมแก้ไขอื่น ๆ สามารถค้นหาได้จาก"
  },
  "p_is_not_a_valid_protocol_which_must_be_ftp_http_h_adf13fc2": {
    "message": "{ p } ไม่ใช่โปรโตคอลที่ถูกต้อง โดยจะต้องเป็น ftp, http, https, mailto, skype, tel หรือสามารถเว้นว่าง"
  },
  "pages_e5414c2c": { "message": "เพจ" },
  "paragraph_5e5ad8eb": { "message": "ย่อหน้า" },
  "pentagon_17d82ea3": { "message": "ห้าเหลี่ยม" },
  "people_b4ebb13c": { "message": "บุคคล" },
  "percentage_34ab7c2c": { "message": "เปอร์เซ็นต์" },
  "percentage_must_be_a_number_8033c341": {
    "message": "เปอร์เซ็นต์จะต้องเป็นตัวเลข"
  },
  "performing_arts_icon_f3497486": { "message": "ไอคอนนาฏศิลป์" },
  "physical_education_icon_d7dffd3e": { "message": "ไอคอนพลศึกษา" },
  "pixels_52ece7d1": { "message": "พิกเซล" },
  "posted_when_a578f5ab": { "message": "โพสต์เมื่อ: { when }" },
  "preformatted_d0670862": { "message": "กำหนดรูปแบบไว้ล่วงหน้า" },
  "pretty_html_editor_28748756": { "message": "HTML Editor ที่สวยงาม" },
  "preview_53003fd2": { "message": "แสดงตัวอย่าง" },
  "preview_in_overlay_ed772c46": { "message": "แสดงตัวอย่างเป็นโอเวอร์เลย์" },
  "preview_inline_9787330": { "message": "แสดงตัวอย่างในแถว" },
  "previous_page_928fc112": { "message": "หน้าที่แล้ว" },
  "protocol_must_be_ftp_http_https_mailto_skype_tel_o_73beb4f8": {
    "message": "โปรโตคอลจะต้องเป็น ftp, http, https, mailto, skype, tel หรือสามารถเว้นว่าง"
  },
  "published_c944a23d": { "message": "เผยแพร่แล้ว" },
  "published_when_302d8e23": { "message": "เผยแพร่แล้ว: { when }" },
  "quizzes_7e598f57": { "message": "คำถาม" },
  "raw_html_editor_e3993e41": { "message": "Raw HTML Editor" },
  "record_7c9448b": { "message": "บันทึก" },
  "record_upload_media_5fdce166": { "message": "บันทึก/อัพโหลดสื่อ" },
  "relationships_6602af70": { "message": "ความสัมพันธ์" },
  "religion_icon_246e0be1": { "message": "ไอคอนศาสนา" },
  "remove_link_d1f2f4d0": { "message": "ลบลิงค์" },
  "resize_ec83d538": { "message": "ปรับขนาด" },
  "restore_auto_save_deccd84b": {
    "message": "กู้คืนที่บันทึกอัตโนมัติหรือไม่"
  },
  "rich_content_editor_2708ef21": { "message": "Rich Content Editor" },
  "right_to_left_9cfb092a": { "message": "ขวาไปซ้าย" },
  "sadly_the_pretty_html_editor_is_not_keyboard_acces_50da7665": {
    "message": "น่าเสียดาย HTML Editor ที่สวยงามไม่สามารถใช้งานผ่านแป้นพิมพ์ ใช้งาน HTML Editor แบบไม่ปรุงแต่งที่นี่"
  },
  "save_11a80ec3": { "message": "บันทึก" },
  "saved_buttons_and_icons_8278eed2": { "message": "ปุ่มและไอคอนที่บันทึกไว้" },
  "search_280d00bd": { "message": "ค้นหา" },
  "search_term_b2d2235": { "message": "คำค้นหา" },
  "select_crop_shape_d441feeb": { "message": "เลือกรูปทรงการครอป" },
  "select_language_7c93a900": { "message": "เลือกภาษา" },
  "selected_274ce24f": { "message": "เลือกแล้ว" },
  "shift_o_to_open_the_pretty_html_editor_55ff5a31": {
    "message": "Shift-O เพื่อเปิด HTML Editor ที่สวยงาม"
  },
  "show_audio_options_b489926b": { "message": "แสดงตัวเลือกเสียง" },
  "show_embed_options_ef8d7ef": { "message": "แสดงตัวเลือกในการผนวก" },
  "show_image_options_1e2ecc6b": { "message": "แสดงตัวเลือกสำหรับภาพ" },
  "show_link_options_545338fd": { "message": "แสดงตัวเลือกสำหรับลิงค์" },
  "show_video_options_6ed3721a": { "message": "แสดงตัวเลือกสำหรับวิดีโอ" },
  "single_color_image_4e5d4dbc": { "message": "ภาพสีเดียว" },
  "size_b30e1077": { "message": "ขนาด" },
  "size_of_caption_file_is_greater_than_the_maximum_m_bff5f86e": {
    "message": "ขนาดของไฟล์คำบรรยายจะต้องมากกว่าขนาดสูงสุดที่อนุญาตที่ { max } kb"
  },
  "small_b070434a": { "message": "เล็ก" },
  "something_went_wrong_89195131": { "message": "มีบางอย่างผิดปกติ" },
  "something_went_wrong_and_i_don_t_know_what_to_show_e0c54ec8": {
    "message": "มีบางอย่างผิดพลาดและเราไม่รู้ว่าจะแสดงอะไรให้กับคุณ"
  },
  "something_went_wrong_check_your_connection_and_try_2a7b2d13": {
    "message": "มีบางอย่างผิดพลาด กรุณาตรวจสอบการเชื่อมต่อและลองใหม่อีกครั้ง"
  },
  "something_went_wrong_d238c551": { "message": "มีบางอย่างผิดปกติ" },
  "something_went_wrong_try_again_after_refreshing_th_e094eb8d": {
    "message": "มีบางอย่างผิดพลาด ลองใหม่อีกครั้งหลังจากรีเฟรชหน้าเพจ"
  },
  "something_went_wrong_uploading_check_your_connecti_aa201f15": {
    "message": "มีบางอย่างผิดพลาดในการอัพโหลด กรุณาตรวจสอบการเชื่อมต่อและลองใหม่อีกครั้ง"
  },
  "sort_by_e75f9e3e": { "message": "จัดเรียงจาก" },
  "square_511eb3b3": { "message": "จัตุรัส" },
  "square_unordered_list_b15ce93b": {
    "message": "ทำกรอบรายการที่ไม่ได้จัดลำดับ"
  },
  "star_8d156e09": { "message": "Star" },
  "styles_2aa721ef": { "message": "รูปแบบ" },
  "submit_a3cc6859": { "message": "ส่ง" },
  "subscript_59744f96": { "message": "ตัวห้อย" },
  "superscript_8cb349a2": { "message": "ตัวยก" },
  "supported_file_types_srt_or_webvtt_7d827ed": {
    "message": "ประเภทไฟล์ที่รองรับ: SRT หรือ WebVTT"
  },
  "switch_to_the_html_editor_146dfffd": { "message": "สลับไปที่ HTML Editor" },
  "switch_to_the_rich_text_editor_63c1ecf6": {
    "message": "สลับไปที่ Rich Text Editor"
  },
  "syllabus_f191f65b": { "message": "หลักสูตร" },
  "tab_arrows_4cf5abfc": { "message": "แท็บ/ลูกศร" },
  "text_7f4593da": { "message": "ข้อความ" },
  "text_background_color_16e61c3f": { "message": "สีพื้นหลังข้อความ" },
  "text_color_acf75eb6": { "message": "สีข้อความ" },
  "text_position_8df8c162": { "message": "ตำแหน่งข้อความ" },
  "text_size_887c2f6": { "message": "ขนาดข้อความ" },
  "the_material_is_in_the_public_domain_279c39a3": {
    "message": "สื่ออยู่ในโดเมนสาธารณะ"
  },
  "the_material_is_licensed_under_creative_commons_3242cb5e": {
    "message": "สื่อได้รับอนุญาตภายใต้ ใช้งานร่วมกันเพื่อการสร้างสรรค์"
  },
  "the_material_is_subject_to_an_exception_e_g_fair_u_a39c8ca2": {
    "message": "สื่อมีข้อยกเว้น เช่น การใช้งานอย่างเหมาะสม สิทธิ์ในการเสนอราคา หรืออื่น ๆ ภายใต้กฎหมายลิขสิทธิ์ที่เกี่ยวข้อง"
  },
  "the_pretty_html_editor_is_not_keyboard_accessible__d6d5d2b": {
    "message": "HTML Editor ที่สวยงามไม่สามารถใช้งานผ่านแป้นพิมพ์ กด Shift-O เพื่อเปิด HTML Editor แบบไม่ปรุงแต่ง"
  },
  "though_your_video_will_have_the_correct_title_in_t_90e427f3": {
    "message": "แม้ว่าวิดีโอของคุณจะมีชื่อที่ถูกต้องในเบราเซอร์ แต่เราไม่สามารถอัพเดตในฐานข้อมูลได้"
  },
  "title_ee03d132": { "message": "ชื่อ" },
  "to_be_posted_when_d24bf7dc": { "message": "ที่จะโพสต์: { when }" },
  "to_do_when_2783d78f": { "message": "สิ่งที่ต้องทำ: { when }" },
  "toggle_summary_group_413df9ac": { "message": "สลับกลุ่ม { summary }" },
  "tools_2fcf772e": { "message": "เครื่องมือ" },
  "totalresults_results_found_numdisplayed_results_cu_a0a44975": {
    "message": "พบ { totalResults } ผลลัพธ์, { numDisplayed } ผลลัพธ์ที่แสดงในปัจจุบัน"
  },
  "tray_839df38a": { "message": "ถาด" },
  "triangle_6072304e": { "message": "สามเหลี่ยม" },
  "type_control_f9_to_access_image_options_text_a47e319f": {
    "message": "พิมพ์ Control F9 เพื่อเข้าไปยังตัวเลือกสำหรับภาพ { text }"
  },
  "type_control_f9_to_access_link_options_text_4ead9682": {
    "message": "พิมพ์ Control F9 เพื่อเข้าไปยังตัวเลือกสำหรับลิงค์ { text }"
  },
  "type_control_f9_to_access_table_options_text_92141329": {
    "message": "พิมพ์ Control F9 เพื่อเข้าไปยังตัวเลือกสำหรับตาราง { text }"
  },
  "unpublished_dfd8801": { "message": "เลิกเผยแพร่แล้ว" },
  "untitled_efdc2d7d": { "message": "ไม่ระบุชื่อ" },
  "upload_document_253f0478": { "message": "อัพโหลดเอกสาร" },
  "upload_file_fd2361b8": { "message": "อัพโหลดไฟล์" },
  "upload_image_6120b609": { "message": "อัพโหลดภาพ" },
  "upload_media_ce31135a": { "message": "อัพโหลดสื่อ" },
  "upload_record_media_e4207d72": { "message": "อัพโหลด/บันทึกสื่อ" },
  "uploading_19e8a4e7": { "message": "กำลังอัพโหลด" },
  "uploading_closed_captions_subtitles_failed_bc093f3": {
    "message": "อัพโหลดคำบรรยายแบบซ่อนได้ล้มเหลว"
  },
  "uppercase_alphabetic_ordered_list_3f5aa6b2": {
    "message": "รายการจัดลำดับอักษรตัวพิมพ์ใหญ่"
  },
  "uppercase_roman_numeral_ordered_list_853f292b": {
    "message": "รายการจัดลำดับตัวเลขโรมันพิมพ์ใหญ่"
  },
  "url_22a5f3b8": { "message": "URL" },
  "usage_right_ff96f3e2": { "message": "สิทธิ์การใช้งาน:" },
  "usage_rights_required_5fe4dd68": { "message": "สิทธิ์การใช้งาน (ต้องมี)" },
  "use_arrow_keys_to_navigate_options_2021cc50": {
    "message": "ใช้ปุ่มลูกศรเพื่อไปยังตัวเลือกต่าง ๆ"
  },
  "use_arrow_keys_to_select_a_shape_c8eb57ed": {
    "message": "ใช้ปุ่มลูกศรเพื่อเลือกรูปทรง"
  },
  "use_arrow_keys_to_select_a_size_699a19f4": {
    "message": "ใช้ปุ่มลูกศรเพื่อเลือกขนาด"
  },
  "use_arrow_keys_to_select_a_text_position_72f9137c": {
    "message": "ใช้ปุ่มลูกศรเพื่อเลือกตำแหน่งข้อความ"
  },
  "use_arrow_keys_to_select_a_text_size_65e89336": {
    "message": "ใช้ปุ่มลูกศรเพื่อเลือกขนาดข้อความ"
  },
  "use_arrow_keys_to_select_an_outline_size_e009d6b0": {
    "message": "ใช้ปุ่มลูกศรเพื่อเลือกขนาดกรอบ"
  },
  "used_by_screen_readers_to_describe_the_content_of__b1e76d9e": {
    "message": "ใช้โดยโปรแกรมอ่านหน้าจอเพื่อระบุเนื้อหาของภาพ"
  },
  "used_by_screen_readers_to_describe_the_video_37ebad25": {
    "message": "ใช้โดยโปรแกรมอ่านหน้าจอเพื่อระบุวิดีโอ"
  },
  "user_documents_c206e61f": { "message": "เอกสารของผู้ใช้" },
  "user_files_78e21703": { "message": "ไฟล์ของผู้ใช้" },
  "user_images_b6490852": { "message": "ภาพของผู้ใช้" },
  "user_media_14fbf656": { "message": "สื่อของผู้ใช้" },
  "video_options_24ef6e5d": { "message": "ตัวเลือกวิดีโอ" },
  "video_options_tray_3b9809a5": { "message": "ถาดตัวเลือกวิดีโอ" },
  "video_player_for_9e7d373b": { "message": "เครื่องเล่นวิดีโอสำหรับ " },
  "video_player_for_title_ffd9fbc4": {
    "message": "เครื่องเล่นวิดีโอสำหรับ { title }"
  },
  "view_ba339f93": { "message": "ดู" },
  "view_description_30446afc": { "message": "ดูรายละเอียด" },
  "view_keyboard_shortcuts_34d1be0b": { "message": "ดูชอร์ตคัทแป้นพิมพ์" },
  "view_predefined_colors_92f5db39": { "message": "ดูสีที่กำหนดไว้เบื้องต้น" },
  "view_title_description_67940918": { "message": "ดูรายละเอียด { title }" },
  "width_492fec76": { "message": "ความกว้าง" },
  "width_and_height_must_be_numbers_110ab2e3": {
    "message": "ความกว้างและความสูงต้องเป็นตัวเลข"
  },
  "width_x_height_px_ff3ccb93": { "message": "{ width } x { height }px" },
  "wiki_home_9cd54d0": { "message": "Wiki Home" },
  "yes_dde87d5": { "message": "ใช่" },
  "you_may_not_upload_an_empty_file_11c31eb2": {
    "message": "คุณไม่สามารถอัพโหลดไฟล์เปล่า"
  },
  "zoom_in_image_bb97d4f": { "message": "ซูมภาพเข้า" },
  "zoom_out_image_d0a0a2ec": { "message": "ซูมภาพออก" }
}


formatMessage.addLocale({th: locale})
