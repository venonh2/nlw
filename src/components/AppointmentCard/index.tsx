import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {categories} from '../../utils/categorys';
import GuildIcon from '../GuildIcon';

import {theme} from '../../global/theme/theme';

import PlayerSvg from '../../assets/player.svg';
import CalenderSvg from '../../assets/calendar.svg';

export type guildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
};

export type appointmentProps = {
  id: string;
  guild: guildProps;
  category: string;
  date: string;
  description: string;
};

interface Props extends RectButtonProps {
  data: appointmentProps;
}

const AppointmentCard = ({data, ...rest}: Props) => {
  const [category] = categories.filter(item => item.id === data.category);

  const {owner} = data.guild;

  const {primary, on} = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalenderSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>
          </View>

          <View style={styles.playerInfo}>
            <PlayerSvg fill={owner ? primary : on} />
            <Text style={[styles.player, {color: owner ? primary : on}]}>
              {owner ? 'Anfitrião' : 'Visitante'}
            </Text>
          </View>
        </View>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    color: theme.colors.heading,
    fontSize: 18,
  },
  category: {
    color: theme.colors.highlight,
    fontSize: 13,
    marginRight: 24,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    color: theme.colors.heading,
    fontSize: 13,
    marginLeft: 7,
  },
  player: {
    marginLeft: 7,
    marginRight: 24,
  },
});

export default AppointmentCard;
