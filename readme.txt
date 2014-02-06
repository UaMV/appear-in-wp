=== appear.in WP ===

Contributors: UaMV
Donate link: http://vandercar.net/wp
Tags: appear, in, video, chat, conference, webrtc
Requires at least: 3.1
Tested up to: 3.8
Stable tag: 1.0
License: GPLv2 or later

Adds appear.in rooms to your site via shortcode

== Description ==

The appear.in WP plugin harnesses the power of [appear.in](http://appear.in "appear.in") allowing site owners to embed secure peer-to-peer video chat rooms on a self-hosted WordPress site via the [appear_in] shortcode.

= Shortcode =

> **[appear_in]**<br /><br />
> **[appear_in room="_custom-public-room-name_"]**

= Settings =

Custom settings for appear.in Wordpress are found on the Settings > Media admin page.

* **Allow:** Public & Private Rooms • Public Room Only • Private Rooms Only
* **Public Room Name:** define your custom public room name
* **Enable some number of email invitations upon entering public or private rooms:** 1-7 invitations allowed

The settings page includes the following basic usage stats per room type:

* Number of rooms triggered
* Number of invites sent
* Number & percentage of invites accepted
* Average number of participants per room

If a public room name has not been explicitly defined in settings or shortcode, then the default public room expires daily.

= Documentation =

Documentation and sample implementation can also be found [here](http://vandercar.net/wp "appear.in WordPress Documentation").

Learn more about [appear.in](http://appear.in "appear.in") - a product of [Telenor Digital AS](http://www.telenor.com/ "Telenor Digital") built with WebRTC technologies.

= Filters =

* aiwp_enter_public_room
* aiwp_create_private_room
* aiwp_no_browser_support
* aiwp_send_public_invites
* aiwp_send_private_invites
* aiwp_invitation_subject
* aiwp_invitation_message



== Installation ==

1. Upload the `appear-in-wordpress` directory to `/wp-content/plugins/`
1. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

Silence is golden.

== Screenshots ==

1. appear.in WordPress Settings

== Changelog ==

= 1.0 =
* Initial Release

== Upgrade Notice ==

= 1.0 =
* Initial Release